const hello = (name) => (name && name != '') ? "Hello, " + name.toLowerCase().charAt(0).toUpperCase() + name.slice(1).toLowerCase() +  "!" : "Hello, World!";