import Image from 'next/image'

const onlineUser = () => {
    return(
        <div className="flex flex-row" >
            <div>
                <Image
                    src="/images/photo.jpg"
                    alt='profile Pictuure'
                    width={40}
                    height={40}
                />
            </div>
            <div className="ml-5" >
                <p>User Name</p>
            </div>
        </div>
    );
}

export default onlineUser