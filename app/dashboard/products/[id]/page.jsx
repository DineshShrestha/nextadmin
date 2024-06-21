import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"
const SingleProductPage = () => {
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.infoContainer}>
                    <div className={styles.imgContainer}>
                        <Image src="/noavatar.png" alt="" fill />
                    </div>
                    Iphone
                </div>
                <div className={styles.formContainer}>
                    <form action="" className={styles.form}>
                        <label >Title</label>
                        <input type="text" name="title" placeholder="John doe" />
                        <label >Price</label>
                        <input type="number" name="price" placeholder="$123" />
                        <label >Stock</label>
                        <input type="number" name="stock" placeholder="red" />
                        <label >Color</label>
                        <input type="text" name="color" placeholder="" />
                        <label >Size</label>
                        <input type="text" name="size" placeholder="New York"/>
                        <label>Cat</label>
                        <select name="cat" id="cat" >
                            <option value="kitchne">Kitchen</option>
                            <option value="computers">Computers</option>
                        </select>
                        <label>Description</label>
                        <textarea name="desc" id="desc" rows="10" placeholder="description"></textarea>
                        <button>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingleProductPage