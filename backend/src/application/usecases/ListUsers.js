module.exports = class ListUsers {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute() {
    return this.userRepository.getAll();
  }
};
