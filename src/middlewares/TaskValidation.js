const TaskModel = require('../models/TaskModel');
const { isPast } = require('date-fns')

// next - quem vai executar se for validado
const TaskValidation = async (req, res, next) => {
    // desconstrução
    const { macaddress, type, title, description, when } = req.body;

    // se nulo - não existir
    if(!macaddress)
        return res.status(400).json({error: "Macaddress é obrigatório"});
    else if(!type)
        return res.status(400).json({error: "Tipo é obrigatório"});
    else if(!title)
        return res.status(400).json({error: "Título é obrigatório"});
    else if(!description)
        return res.status(400).json({error: "Decrição é obrigatório"});
    else if(!when)
        return res.status(400).json({error: "Data e Hora são obrigatórios"});
    else if(isPast(new Date (when)))
        return res.status(400).json({error: "Escoha data e hora futura."});


    let exists;
    if(req.params.id){ // vai verificar se existe ai valida update senão valida create
        exists = await TaskModel
            .findOne({ 
                '_id': { '$ne': req.params.id }, // $ne - diference
                'when': { '$eq': new Date(when) }, // $eq - equals - exatamente igual
                'macaddress': { '$in': macaddress } //$in - exist - está contido
            });
    }
    else {
        exists = await TaskModel
            .findOne({ 
                'when': { '$eq': new Date(when) }, // $eq - equals - exatamente igual
                'macaddress': { '$in': macaddress } //$in - exist - está contido
            });
    }

    if(exists)
        return res.status(400).json({error: "Já existe uma tarefa nesta data e hora."}); 

    return next();
}

module.exports = TaskValidation;