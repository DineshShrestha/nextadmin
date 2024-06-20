import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/users/users.module.css"
import Image from "next/image"
import Link from "next/link"
const UsersPage = ({placeholder}) => {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..."/>
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                            John Doe
                            </div>
                        </td>
                        <td>john@gmail.com</td>
                        <td>12.03.2023</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/">
                            <button className={`${styles.button} ${styles.view}`}>View</button>
                            </Link>
                            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                            Jen Doe
                            </div>
                        </td>
                        <td>jen@gmail.com</td>
                        <td>12.03.2023</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/dasbhoard/users/test">
                            <button className={`${styles.button} ${styles.view}`}>View</button>
                            </Link>
                            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
            <Pagination/>
        </div>
    )
}

export default UsersPage