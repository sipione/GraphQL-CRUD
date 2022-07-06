const { SQLDataSource } = require("datasource-sql");


class turmasAPI extends SQLDataSource{
    constructor(dbConfig){
        super(dbConfig)
        this.resposta = {
            mensagem: ""
        }
    }

    async getTurmas(){
        const turmas = await this.db.select('*').from('turmas')
        return turmas;
        //Aqui se usa a sintax do kinex que é o modulo JS utilizado pelo SQLdatasource
    }

    async getTurma(id){
        const turma = await this.db.select('*').from('turmas').where({id: Number(id)})

        return turma[0]
    }

    async incluiTurma(turma){
        const novaTurmaId = await this.db.insert(turma).into('turmas');

        const turmaInserida = await this.getTurma(novaTurmaId[0])
        
        return ({...turmaInserida})
    }

    async atualizaTurma(novosDados){
        await this.db.update(novosDados.turma).into('turmas').where({id: Number(novosDados.id)})

        const turmaAtualizada = await this.getTurma(novosDados.id)
        
        return({...turmaAtualizada})
    }

    async deletaTurma(id){

        try{
            await this.db('turmas').where({id: id}).del()
    
            this.resposta.mensagem = `Registro de id ${id} foi deletado com sucesso`
    
            return this.resposta;
        }catch(err){
            return console.log(err)
        }
    }
}

module.exports = turmasAPI;