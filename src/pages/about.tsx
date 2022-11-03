import { Meta } from '@/layouts/Meta'
import type { Student } from '@/models'
import { Main } from '@/templates/Main'

const About = () => {
  // const { locale } = useRouter()
  const stu: Student = {
    name: 'Quang Khai',
    age: 24,
    address: 'HD',
    id: 'B17DCCN337',
    isHandSome: true,
  }
  console.log(stu)

  return (
    <Main meta={<Meta title="About" description="About" />}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
    </Main>
  )
}

export default About
