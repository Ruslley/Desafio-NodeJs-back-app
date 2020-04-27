import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // Buscar no banco de dados para verificar se existe o registro
    const transactionRespository = getCustomRepository(TransactionsRepository);
    const transaction = await transactionRespository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist.');
    }
    await transactionRespository.remove(transaction);
  }
}

export default DeleteTransactionService;
