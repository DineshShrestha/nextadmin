import styles from "./footer.module.css"
const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>Next Admin</div>
            <div className={styles.text}>Copyright &nbsp; All rights reserved.</div>
        </div>
    )
}

export default Footer