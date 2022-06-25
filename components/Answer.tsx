import { FC } from 'react'
import { Button, Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

const Answer: FC = () => {
  const form = useForm({
    initialValues: {
      code: '',
    },
  })

  const handleSubmit = (values: typeof form.values) => {
    console.log(values)
    form.reset()
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <div className="flex gap-6">
        <TextInput
          className="w-full"
          required
          placeholder='Прапор'
          radius='lg'
          {...form.getInputProps('code')}
        />
        <Button radius='lg' className='bg-white text-black' type='submit'>Надіслати прапор</Button>
      </div>
    </form>
  )
}

export default Answer
