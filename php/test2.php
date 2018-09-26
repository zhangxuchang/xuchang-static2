<?php
/**
 * Created by PhpStorm.
 * User: xuchang
 * Date: 2018/9/25
 * Time: 14:06
 */

/**
 * @param $cpu
 * @param $memory
 *
 * @return array
 */
function getCPUMemoryValueForFargate($cpu, $memory)
{
    /**
     * CPU value limit according to aws document:
     * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterTaskDefinition.html#ECS-RegisterTaskDefinition-request-cpu
     */
    $cpuAndMemotyLimits = [
        256  => [512, 2048],
        512  => [1024, 4096],
        1024 => [2048, 8192],
        2048 => [4096, 16384],
        4096 => [8192, 30720],
    ];

    $changed = false;

    if (!key_exists($cpu, $cpuAndMemotyLimits)) {
        $cpu     = 256;
        $changed = true;
    }

    $memoryLimits = $cpuAndMemotyLimits[$cpu];

    if ($memory < $memoryLimits[0]) {
        $memory  = $memoryLimits[0];
        $changed = true;
    }

    if ($memory > $memoryLimits[1]) {
        $memory  = $memoryLimits[1];
        $changed = true;
    }

    if ($memory > 512 && $memory < 1024) {
        $memory  = 1024;
        $changed = true;
    }

    if ($memory > 1024 && ($remain = $memory % 1024) != 0) {
        $memory  = $memory - $remain;
        $changed = true;
    }

    return [
        'c'       => $cpu,
        'm'       => $memory,
        'changed' => $changed,
    ];

}

$test = getCPUMemoryValueForFargate(512, 6900);

print_r($test);
