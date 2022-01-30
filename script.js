const FIRST_NAMES = ['Bully', 'Bally', 'Building', 'Bailey', 'Blunted', 'Beaver', 'Beckon', 'Bedevil', 'Becoming', 'Becometh', 'Becquerel', 'Bedazzle', 'Bedfordshire', 'Bedrabbling', 'Bedroom', 'Bedspread', 'Beezlebub', 'Befuddler', 'Baghdad', 'Begroaning', 'Bespeckled', 'Benedict', 'Babushka', 'Bamboo', 'Babbled', 'Bubbles', 'Battalion', 'Buffoon', 'Buffoonery', 'Ballyhoo', 'Baccalaureate', 'Bachelorette', 'Backhand', 'Bacteriologist', 'Bacteria', 'Bacterium', 'Babysit', 'Babysitter', 'Badlands', 'British', 'Background', 'Balloon', 'Backflip', 'Ballpark', 'Banishment', 'Bequerel', 'Beezlebub', 'Brazilian'],
      LAST_NAMES = ['Eyelash', 'Eiffel', 'Earwig', 'Easter', 'Evisceration', 'Extract', 'Excalibur', 'Excursion', 'Executioner', 'Exemplify', 'Embezzlement', 'Extortion', 'Earache', 'Earthdweller', 'Eavesdrop', 'Endowment', 'Evanescence', 'Evasive', 'Endangered', 'Éclair', 'Embargo', 'Eccentric', 'Echelon', 'Economist', 'Economize', 'Edifice', 'Euthanasia', 'Effervescence', 'Eightpence', 'Electioneering', 'Electrode', 'Elevator', 'Elucidate', 'Emblematic', 'Embryonic', 'Emoluments', 'Endocrine', 'Enfranchisement', 'Englishwoman', 'Equatorial', 'Esteban'];

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
