import sytles from "./pagination.module.css"
const Pagination = () => {
    return(
        <div className={sytles.container}>
            <button className={sytles.button} disabled>Previous</button>
            <button className={sytles.button}>Next</button>
        </div>
    )
}

export default Pagination