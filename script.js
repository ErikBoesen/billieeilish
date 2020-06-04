const FIRST_NAMES = ['Bully', 'Bally', 'Building', 'Bailey', 'Blunted', 'Beaver', 'Beckon', 'Bedevil', 'Becoming', 'Becometh', 'Becquerel', 'Bedazzle', 'Bedfordshire', 'Bedrabbling', 'Bedroom', 'Bedspread', 'Beezlebub', 'Befuddler', 'Baghdad', 'Begroaning'],
      LAST_NAMES = ['Eyelash', 'Eiffel', 'Earwig', 'Easter', 'Evisceration', 'Extract', 'Excalibur', 'Excursion', 'Executioner', 'Exemlify', 'Embezzlement', 'Extortion'];

function choose(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomName() {
    let first_name = choose(FIRST_NAMES),
        last_name  = choose(LAST_NAMES);
    return first_name + ' ' + last_name;
}

document.getElementById('generate').onclick = function() {
    document.getElementById('name').textContent = randomName();
};
