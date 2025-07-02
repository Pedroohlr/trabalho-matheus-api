module.exports = class UpdateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id, { name, email }) {
    return this.userRepository.update(id, { name, email });
  }
};
