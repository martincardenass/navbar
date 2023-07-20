import { useState } from 'react'
import { navLinks } from './navLinks'
import styles from './navbar.module.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [popup, setPopup] = useState(false)
  const [toggleDoor, setToggleDoor] = useState(false)
  const user = true

  const door = (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path
        d="M13.033 2v-2l10 3v18l-10 3v-2h-9v-7h1v6h8v-18h-8v7h-1v-8h9zm1 20.656l8-2.4v-16.512l-8-2.4v21.312zm-3.947-10.656l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z"
        fill={toggleDoor ? 'black' : 'white'}
      />
    </svg>
  )

  const navItems = (
    <ul>
      {navLinks.map((link) => (
        <li key={link.key}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      <nav className={styles.navbar}>
        <section className={styles.navlinks}>
          <p className={styles.logo}>Logo here</p>
          <section className={styles.links}>{navItems}</section>
        </section>
        <section className={styles.user}>
          {!user && (
            <>
              <p>Log in</p>
              <p>Sign up</p>
            </>
          )}
          {user && (
            <aside className={styles.useraside}>
              <div
                className={styles.useraside}
                onMouseEnter={() => setPopup(!popup)}
                onMouseLeave={() => setPopup(false)}
              >
                <section
                  className={popup ? styles.navuserfocused : styles.navuser}
                >
                  <img
                    src="https://i.imgur.com/0Mpak8Z.png"
                    alt="Profile picture"
                    width={50}
                    style={{ borderRadius: '50%' }}
                  />
                </section>
                <section className={popup ? styles.userpopup : styles.hidden}>
                  <span>Welcome, Martin</span>
                  <span>See profile</span>
                </section>
              </div>
              <section
                onMouseEnter={() => setToggleDoor(!toggleDoor)}
                onMouseLeave={() => setToggleDoor(false)}
                className={styles.logoutbtn}
              >
                <span>{door}</span>
              </section>
            </aside>
          )}
        </section>
        <section
          onClick={() => {
            setToggle(!toggle)
          }}
          className={styles.menu}
        >
          <span className={toggle ? styles.rotate : ''}></span>
          <span className={toggle ? styles.opacity0 : ''}></span>
          <span className={toggle ? styles.rotateminus : ''}></span>
        </section>
      </nav>
      {toggle && (
        <section className={styles.overlay}>
          {!user && (
            <section className={styles.useroverlay}>
              <p>Log in</p>
              <p>Sign up</p>
            </section>
          )}
          {user && (
            <section className={styles.useroverlay}>
              <section className={styles.usercontainer}>
                <img
                  src="https://i.imgur.com/0Mpak8Z.png"
                  alt="Profile picture"
                  width={50}
                  style={{ borderRadius: '50%' }}
                />
                <section className={styles.userinfo}>
                  <span>Welcome, Martin.</span>
                  <span>See profile</span>
                </section>
              </section>
              <p className={styles.userlogout}>Log out</p>
            </section>
          )}
          <section className={styles.items}>{navItems}</section>
        </section>
      )}
    </>
  )
}

export default Navbar
