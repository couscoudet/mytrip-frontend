import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import { Button, FileInput, Label, TextInput, Textarea } from 'flowbite-react'
import { Link } from 'react-router-dom';

type Props = {}

interface TripInterface {
    id: undefined | number;
    title: undefined | string;
    details: undefined | string;
    image_url: undefined | string
}

function TripManager({}: Props) {
    const [data, setData] = useState<TripInterface >({});

    const handleChange = (e) => {
        const {name, value} = e.target
        const newData: TripInterface | undefined = {... data, [name]: value}
        setData(newData)
    }
    
  return (
    <MainLayout>
        <div className='flex flex-col h-[calc(100vh-100px)] items-center'>
        {/* <div className='md:container md:mx-auto flex justify-center h-screen items-center'> */}
        <h2 className='text-2xl mt-3 mb-5 text-lime-700'>{!data.id ? 'Créer un voyage' : 'Modifier un voyage'}</h2>
        <form className="flex max-w-md flex-col gap-4 h-[60vh] justify-evenly">
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="email1"
                    value="Nom du voyage"
                />
                </div>
                <TextInput
                onChange={(e) => handleChange(e)}
                id="title"
                name="title"
                value={data?.title}
                required
                type="text"
                />
            </div>
            <div
            className="max-w-md"
            id="textarea"
            >
                <div className="mb-2 block">
                    <Label
                    htmlFor="comment"
                    value="Description"
                    />
                </div>
                <Textarea
                    className='p-1'
                    id="comment"
                    placeholder="Quelques mots sur votre voyage..."
                    required
                    rows={4}
                />
            </div>
            <div
            className="max-w-md"
            id="fileUpload"
            >
                <div className="mb-2 block">
                    <Label
                    htmlFor="picture"
                    value="Ajouter une image"
                    />
                </div>
                <FileInput
                    helperText="Une image permettra de visualiser votre voyage"
                    id="trip_picture"
                />
            </div>
    
            <div className='flex justify-evenly'>
                <Link to="/trips-list"><Button color="red">Annuler</Button></Link>
                <Button color="lime" >
                    <svg class="w-4 h-4 text-lime-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                    </svg>
                </Button>
            </div>
        </form>
        {/* </div> */}
        </div>
    </MainLayout>
  )
}

export default TripManager