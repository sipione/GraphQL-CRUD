const { SQLDataSource } = require("datasource-sql");
const turmasAPI = require("../../turma/datasource/turma");
const UsersAPI = require("../../user/datasource/user");


class matriculasAPI extends SQLDataSource{
    constructor(dbconfig){
        super(dbconfig)
        this.resposta = {
            mensagem: ""
        }
    }

    async getMatriculas(){
        const arrayMatriculas = []
        
        const matriculas = await this.db.select('*').from('matriculas');

        matriculas.map(async (matricula)=>{
            const classUser = new UsersAPI()
            const estudante = await classUser.getUserById(matricula.estudante_id)

            const turma = await turmasAPI.getTurma(matricula.turma_id);
            
            arrayMatriculas.push({
                id: matricula.id,
                estudante: estudante[0],
                turma: turma[0],
                createdAt: matricula.created_at,
                status: matricula.status
            })

        })

        console.log(arrayMatriculas)

        return arrayMatriculas
    }

    async matrcicularEstudante(ids){
        const novaMatricula = {
            estudante_id: ids.estudante,
            turma_id : ids.turma,
            status: "confirmado"
        }
        //a chave é como está no banco e o valor é como estão os parâmetros no Schema
        
        const id = await this.db.insert(novaMatricula).into('matriculas')

        this.resposta.mensagem = `matricula realizada com sucesso. Essa matrícula possui o id ${id}`

        return this.resposta
    }

}

module.exports = matriculasAPI;