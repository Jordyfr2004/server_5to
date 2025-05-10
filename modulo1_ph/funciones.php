<?php
function ejecutarRegistro($objeto, $callback) {
    if (is_callable($callback)) {
        $callback($objeto);
    }
}

// Simulación de async/await con generators
function async($generator) {
    $gen = $generator();
    while ($gen->valid()) {
        $promesa = $gen->current();
        $promesa();
        $gen->next();
    }
}

// Simulación de una promesa
function promesaRegistro($mensaje) {
    return function() use ($mensaje) {
        echo "🕒 Procesando: $mensaje...\n";
        sleep(1);
        echo "✅ Completado: $mensaje\n";
    };
}

