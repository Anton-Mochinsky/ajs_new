function getHealthStatus(character) {
    if (character.health > 50) {
        return 'healthy';
    } else if (character.health >= 15) {
        return 'wounded';
    } else {
        return 'critical';
    }
}

module.exports = getHealthStatus;