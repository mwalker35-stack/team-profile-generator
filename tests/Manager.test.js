const Manager = require('../lib/Manager.js')

test('employee object', () => {
    // expect(sum(1, 2)).toBe(3);
    const manager = new Manager('Marcus Walker', "1111", 'marcus@gmail.com', '561-310-6524');

    expect(manager.name).toBe('Marcus Walker');
    expect(manager.id).toBe('1111');
    expect(manager.email).toBe('marcus@gmail.com');
    expect(manager.officeNumber).toBe('561-310-6524');
  });

  test('gets manager role', () => {
    const manager = new Manager('Marcus Walker', "1111", 'marcus@gmail.com', '561-310-6524');

    expect(manager.getRole()).toEqual('Manager');
  });

  test('gets manager office Number', () => {
    const manager = new Manager('Marcus Walker', "1111", 'marcus@gmail.com', '561-310-6524');

    expect(manager.getOfficeNumber()).toEqual('561-310-6524');
  });