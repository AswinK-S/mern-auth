import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {

    const {currentUser} = useSelector((state)=> state.user)

    return (
        <div className='bg-slate-200'>
            <div className='flex items-center justify-between max-w-6xl p-3 mx-auto'>
               <Link to='/'>
                <h1 className='font-bold'> Auth App </h1>
                </Link>
                <ul className='flex gap-4'>
                    <Link to='/'>
                    <li>Home</li>
                    </Link>
                    <Link to='/about'> 
                    <li>About</li>
                    </Link>
                    <Link to='/profile'>
                        {currentUser ?(
                            <img src={currentUser.profilePicture} alt="profile" className='h-7 w-7 rounded-full
                            object-cover' />
                        ):(
                            <li>Sign In</li>

                        )}
                    </Link>
                </ul>
            </div>
        </div>
    )
}
