import Image from "next/image"

export default function Share(){
    return(
        <div className="SHARE">
            <p className="text">Shareyour setup with</p>
            <h1 className="title">#Funiro Furniture</h1>
            <Image src="/share.jpg" alt="share" className="items-center align-middle flex" width={1000} height={1000}></Image>
        </div>
    )
}