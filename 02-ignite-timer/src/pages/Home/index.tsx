import { useContext } from 'react'
import { HandPalm, Play } from 'phosphor-react'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo de precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo de precisa ser de no máximo 60 minutos.'),
})

interface NewCycleFormData {
  task: string,
  minutesAmount: number
}

export function Home() {
  const {
    activeCycle,
    createNewCycle,
    interruptCycle,
  } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const task = watch('task')

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {
          activeCycle
            ? (
              <StopCountdownButton onClick={interruptCycle} type="button">
                <HandPalm size={24} />
                Interroper
              </StopCountdownButton>
              )
            : (
              <StartCountdownButton disabled={!task} type="submit">
                <Play size={24} />
                Começar
              </StartCountdownButton>
              )
        }

      </form>
    </HomeContainer>
  )
}
