const express = require('express')
const router = express.Router()

const {
    getPeople,
    postPeople,
    postPeoplePostman,
    putPeople,
    deletePeople
} = require('../controllers/people')

//OPCION A 

// router.get('/', getPeople)

// router.post('/', postPeople)

// router.post('/postman', postPeoplePostman)

// router.put('/:id', putPeople)

// router.delete('/:id', deletePeople)



//OPCION B
router.route('/').get(getPeople).post(postPeople)
router.route('/postman').post(postPeoplePostman)
router.route('/:id').put(putPeople).delete(deletePeople)



module.exports=router