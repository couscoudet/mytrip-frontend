import { Button, Card, Label, TextInput } from 'flowbite-react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';

type Props = {}

function Login({}: Props) {

    const [data, setData] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target
        const newData = {... data, [name]: value}
        setData(newData)
    }

  return (
    <div className='sm:container sm:mx-auto flex justify-center h-screen items-center'>

        <div>
            <div className="main-logo mb-5"><img src={logo}  alt="mytrip_logo" /></div>
            
            <Card className='m-5 auth-card'>
                <div className='text-4xl m-3'>Bienvenue</div>    
                <form className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="E-mail"
                        />
                        </div>
                        <TextInput
                        onChange={(e) => handleChange(e)}
                        id="email1"
                        name="email"
                        value={data?.email}
                        placeholder="email@mail.com"
                        required
                        type="email"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Mot de passe"
                        />
                        </div>
                        <TextInput
                        onChange={(e) => handleChange(e)}
                        name="password"
                        id="password1"
                        required
                        type="password"
                        value={data?.password}
                        />
                    </div>
                    
                    <Button className='text-xs mt-5' color="lime" type="submit">
                        Connexion
                    </Button>
                </form>
                <Link className='text-xs text-lime-500 hover:text-lime-600' to="/signup">Première Connexion</Link>
                <Link className='text-xs text-lime-500 hover:text-lime-600' to="/password-init">Mot de passe oublié</Link>
            </Card>
        </div>
    </div>
    
  )
}

export default Login