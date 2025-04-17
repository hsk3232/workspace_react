import clock from '../../assets/clock.png'
export default function MyClockImage(){

    return (
        <>
        <img src={clock} alt="clock" className=" h-4/10 m-10 flex justify-center motion-safe:animate-bounce"/>
        </>
    )


}
