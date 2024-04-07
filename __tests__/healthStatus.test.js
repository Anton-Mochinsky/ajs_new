const getHealthStatus = require('../healthStatus');

describe('getHealthStatus', () => {
    it('should return "healthy" for health more than 50', () => {
        const character = { name: 'Маг', health: 90 };
        expect(getHealthStatus(character)).toBe('healthy');
    });

    it('should return "wounded" for health from 50 to 15', () => {
        const character = { name: 'Маг', health: 30 };
        expect(getHealthStatus(character)).toBe('wounded');
    });

    it('should return "critical" for health less than 15', () => {
        const character = { name: 'Маг', health: 10 };
        expect(getHealthStatus(character)).toBe('critical');
    });
});