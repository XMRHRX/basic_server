#!/usr/bin/sh
SCRIPT_PATH=/home/xmrhrx/Computing/git/basic_server/script/dev/sensors
SENSOR_LIST=('ultra_ray' 'humidity' 'temperature');

for SENSOR in "${SENSOR_LIST[@]}"
do
  RESULT=$(. $SCRIPT_PATH/registerSensors.sh $SENSOR);
  echo $RESULT;
  if [ "$RESULT" == '{"type": "'$SENSOR'"}' ] && [ $? == 0 ];then
    echo 'register success';
  else
    echo "register failed";
    exit 1;
  fi
done
RESULT=. $SCRIPT_PATH/listSensors.sh


