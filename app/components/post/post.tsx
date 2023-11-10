import styles from './post.module.css'
import { FaEllipsisV, FaHeart, FaRegCommentAlt } from "react-icons/fa";

const Post = () => {
    return(
            <div className="flex flex-col w-full px-5 pb-5 h-fit bg-neutral-300 rounded-lg" >
                <div className=" relative flex flex-row py-3" >
                    <p className="mr-5" >Profile Picture</p>
                    <div  >
                        <p>Full Name</p>
                        <p>Date and Time</p>
                    </div>
                    <FaEllipsisV className="absolute top-0 right-0 my-3" />
                </div>
                <div>
                </div>
                <div>
                    <article>
                        <p>Insert content Here</p>
                    </article>
                </div> 
                <div className="flex flex-row mt-3 items-center" >
                    <div className="px-2 flex fex-row items-center" ><FaHeart/><p className="px-2" >5</p></div>
                    <div className="px-2 flex fex-row items-center" ><FaRegCommentAlt/><p className="px-2" >5</p></div>
                </div>
            </div>
    )
}

export default Post