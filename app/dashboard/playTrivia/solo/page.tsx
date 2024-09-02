import Image from "next/image"

export default function Soloplay() {
    return(
        <div className="d-flex justify-content-center">
            <div>
                <p className="text-center">Solo Play</p>
                <Image
                    alt="shep holding lightsaver"
                    height={400}
                    width={300}
                    src="/jedi.jpg"

                />
            </div>
     </div>


    )
}
