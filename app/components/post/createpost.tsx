import styles from './post.module.css'
import { FaPaperclip } from "react-icons/fa"
import Button from '@mui/material/Button'

const createPost = () => {
    return(
        <div className={styles.container} >
            <textarea className={styles.textarea} rows={10} cols={50} ></textarea>
            <div >
                <FaPaperclip className={styles.attachmentButton} size={26} />
                <Button className={styles.postButton} variant="outlined">Post</Button>
            </div>
        </div>
    )
}

export default createPost