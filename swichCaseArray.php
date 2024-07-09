<?php
$tag = 3;
switch ($tag) {
    case 0:
        $wochentag = 'Montag';
        break;
    case 1:
        $wochentag = 'Dienstag';
        break;
    case 2:
        $wochentag = 'Mittwoch';
        break;
    case 3:
        $wochentag = 'Donnerstag';
        break;
    case 4:
        $wochentag = 'Freitag';
        break;
    case 5:
        $wochentag = 'Samstag';
        break;
    case 6:
        $wochentag = 'Sonntag';
        break;
}
echo $wochentag . '<br>';

// besser:
$wochentage = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
echo $wochentage[$tag];
?>
