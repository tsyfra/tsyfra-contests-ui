import { FC } from 'react'
import { useForm } from '@mantine/form'
import { Button, Group, TextInput } from '@mantine/core'
import { useRouter } from 'next/router'

const Form: FC = () => {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      name: '',
      code: '',
    }
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values)
    router.push('/contest')
    // form.reset()
  };

  return (
    <div>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          required
          label="Введіть ваше ім’я"
          placeholder="Ім’я"
          radius="lg"
          {...form.getInputProps('name')}
        />

        <TextInput
          required
          label="Введіть код доступу"
          placeholder="Код доступу"
          radius="lg"
          {...form.getInputProps('code')}
        />

        <Group position="center" mt="md">
          <Button radius="lg" className="bg-black w-full" type="submit">Перейти до змагання</Button>
        </Group>
      </form>
    </div>
  )
}

export default Form
