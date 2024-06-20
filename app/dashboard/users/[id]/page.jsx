import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"
const SingleUserPage = () => {
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.infoContainer}>
                    <div className={styles.imgContainer}>
                        <Image src="/noavatar.png" alt="" fill />
                    </div>
                    John Doe
                </div>
                <div className={styles.formContainer}>
                    <form action="" className={styles.form}>
                        <label >Username</label>
                        <input type="text" name="username" placeholder="John doe" />
                        <label >Email</label>
                        <input type="email" name="email" placeholder="johndow@gmail.com" />
                        <label >Password</label>
                        <input type="password" name="password" />
                        <label >Phone</label>
                        <input type="text" name="phone" placeholder="+1234567" />
                        <label >Address</label>
                    <textarea name="address" id="address" placeholder="New York"></textarea>
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                    </select>
                    <button>Update</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default SingleUserPage