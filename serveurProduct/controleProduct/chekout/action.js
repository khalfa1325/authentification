import AsyncHandler from "express-async-handler";
import Chkout from "../../modelProduct/poproduct/chkoutModel.js"
import ChkoutProduct from '../../modelProduct/poproduct/ChekPopulate.js'
export const createCkout = AsyncHandler(async (req, res) => {
    const { name, telephone, product,cin,adress } = req.body
    const today = new Date()
    const date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    try {
        

        const chek = await new Chkout({
            name,
            telephone,
            cin,
            adress,
            product,
            Date: date


        })
        await chek.save()
        res.json({ chek: "commende fait avec succes" })
    } catch (err) {
        console.log(err)
        if(name===""||telephone===""||product===""||cin===""||adress===""){
            res.json({err:"ilya des comps vides"})
        }

    }

})

export const getChekout = AsyncHandler(async (req, res) => {
    const data = await Chkout.find()
    res.json({ data: data })
})


// export const popchek = AsyncHandler(async (req, res) => {
//     const { panierpop } = req.body
//     const today = new Date()
//     const date =
//         today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
//     const chekpanier = await new ChkoutProduct({
//         panierpop,
//         Date: date
//     })
//     await chekpanier.save()
// })