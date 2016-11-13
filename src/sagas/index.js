import minicard from './minicard';


// LOAD THE SAGA
export default function* rootSaga() {
	yield [
		minicard()
	]
}
