module.exports = class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(name, email) {
    return this.userRepository.create({ name, email });
  }
};
