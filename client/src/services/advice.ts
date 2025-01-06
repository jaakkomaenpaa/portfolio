import axios from 'axios'
import { URLS } from '../config'

interface RandomAdviceResponse {
  slip: {
    id: number
    advice: string
  }
}

const getRandom = async (): Promise<string> => {
  try {
    const response = await axios.get(URLS.RANDOM_ADVICE_URL)
    const adviceObject: RandomAdviceResponse = response.data
    const advice = adviceObject.slip.advice
    return advice
  } catch (error) {
    console.log('error', error)
    return 'Encountered an error while fetching advice.'
  }
}

const exports = {
  getRandom,
}

export default exports
