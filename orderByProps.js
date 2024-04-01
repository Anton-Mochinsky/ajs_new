function orderByProps(obj, order) {
    const orderedProps = [];
    const otherProps = [];
    
    for (const key in obj) {
        if (order.includes(key)) {
            orderedProps.push({ key, value: obj[key] });
        } else {
            otherProps.push({ key, value: obj[key] });
        }
    }

    orderedProps.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
    otherProps.sort((a, b) => a.key.localeCompare(b.key));

    return orderedProps.concat(otherProps);
}

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
const result = orderByProps(obj, ["name", "level"]);

console.log(result);
