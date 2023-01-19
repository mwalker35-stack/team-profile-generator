const Engineer = require('../lib/Engineer.js')

test('engineer object', () => {
    // expect(sum(1, 2)).toBe(3);
    const engineer = new Engineer('Marcus Walker', "1111", 'marcus@gmail.com', 'mwalker35-stack');

    expect(engineer.name).toBe('Marcus Walker');
    expect(engineer.id).toBe('1111');
    expect(engineer.email).toBe('marcus@gmail.com');
    expect(engineer.gitHubName).toBe('mwalker35-stack');
  });

  test('gets employee role', () => {
    const engineer = new Engineer('Marcus Walker', "1111", 'marcus@gmail.com', 'mwalker35-stack');

    expect(engineer.getRole()).toEqual('Engineer');
  });

  test('gets engineer gitHubName', () => {
    const engineer = new Engineer('Marcus Walker', "1111", 'marcus@gmail.com', 'mwalker35-stack');

    expect(engineer.getgitHubName()).toEqual('mwalker35-stack');
  });