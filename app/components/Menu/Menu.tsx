import styles from './menu.module.css'
import { BsFillChatLeftTextFill, BsReverseListColumnsReverse, BsStars, BsFillPeopleFill, BsFillBagHeartFill, BsBookmarkFill, BsFillTvFill } from "react-icons/bs";

const MenuOption = () => {
    return(
        <div className="flex flex-row mx-3 py-1 items-center" >
            <BsReverseListColumnsReverse />
            <h3 className="mx-5" >Feed</h3>
        </div>
    )
}

const Menu = () => {
  return (
    <div className="my-mx-10 bg-neutral-300 rounded-lg w-full py-5" >
            <MenuOption/>
            <MenuOption/>
            <MenuOption/>
            <MenuOption/>
            <MenuOption/>
            <MenuOption/>
    </div>
  );
}

export default Menu;