const Intern = require('../lib/Intern.js')

test('intern object', () => {
    // expect(sum(1, 2)).toBe(3);
    const intern = new Intern('Marcus Walker', "1111", 'marcus@gmail.com', 'FAU');

    expect(intern.name).toBe('Marcus Walker');
    expect(intern.id).toBe('1111');
    expect(intern.email).toBe('marcus@gmail.com');
    expect(intern.school).toBe('FAU');
  });

  test('gets interns role', () => {
    const intern = new Intern('Marcus Walker', "1111", 'marcus@gmail.com', 'FAU');

    expect(intern.getRole()).toEqual('Intern');
  });

  test('gets interns school', () => {
    const intern = new Intern('Marcus Walker', "1111", 'marcus@gmail.com', 'FAU');

    expect(intern.getSchool()).toEqual('FAU');
  });

