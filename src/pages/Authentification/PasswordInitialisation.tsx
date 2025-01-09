import { Button, Card, Label, TextInput } from "flowbite-react"
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom"

type Props = {}

function PasswordInitialisation({}: Props) {
  return (
    <div className='sm:container sm:mx-auto flex justify-center h-screen items-center'>

    <div>
        <div className="main-logo mb-5"><img src={logo}  alt="mytrip_logo" /></div>
        
        <Card className='m-5 auth-card'>
            <div className='text-2xl m-3'>Reinitialisez votre mot de passe</div>    
            <form className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="email1"
                        value="E-mail"
                    />
                    </div>
                    <TextInput
                    id="email1"
                    placeholder="email@mail.com"
                    required
                    type="email"
                    />
                    </div>
                    <div className="text-xs text-gray-500" >Un email vous sera envoyé à cette adresse pour la réinitilialisation</div>
                <Button className='text-xs mt-5' color="lime" type="submit">
                    Valider
                </Button>
            </form>
            <Link className='text-xs text-lime-500 hover:text-lime-600' to="/login">Je connais mon mot de passe</Link>
            <Link className='text-xs text-lime-500 hover:text-lime-600' to="/signup">Première connexion</Link>
        </Card>
    </div>
</div>
  )
}

export default PasswordInitialisation