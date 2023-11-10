import styles from './page.module.css'
import CreatePost from './components/post/createpost'
import UserPost from './components/post/post'
import NavigationMenu from './components/Menu/Menu'
import OnlineUser from './components/User/OnlineUser'
import AppButton from './components/Button'

export default function Home() {
  return (
    <main className="flex flex-row m-10 min-h-screen">
      <section className="flex flex-col basis-1/4">
          <NavigationMenu/>
      </section>
      <section className="basis-1/2 mx-4 flex justify-center" >
        <UserPost/>
      </section>
      <section className="basis-1/4" >
        <p>Online</p>
        <OnlineUser/>
      </section>

    </main>
  )
}
