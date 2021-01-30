import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class addTableReceita1611975886432 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('receitas', new TableColumn({
            name: 'user_id',
            type: 'uuid',
            isNullable: true,

        }));
        await queryRunner.createForeignKey('receitas', new TableForeignKey({
            name: 'ReceitaUser',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('receitas', 'ReceitaUser');
        await queryRunner.dropColumn('receitas', 'user_id');
    }

}