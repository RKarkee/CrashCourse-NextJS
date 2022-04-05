import styles from '../styles/Header.module.css'
const Header = () => {
    // const x=5
  return (
    <div>
      <h1 className={styles.title}>
          <span>WebDev </span>News
      </h1>
      <p className={styles.description}>Keep up to date with the latest web dev news</p>
      {/* <style  jsx>
        {`
        .title {
            color:${x>3?'red':'blue'};
        }`
        }
      </style> */}
    </div>
  )
}

export default Header
