#/bin/sh

forever="/user/local/bin/forever";
index="/index.js";

cmd="";

case "$1" in
	start )
		cmd="start";;
	stop )
		cmd="stop";;
	restart )
		cmd="restart";;
esac

if [ "${cmd}" = "" ]; then
	echo "Please input cmd.";
	exit 1;
i

fullCmd=${forever}" "${cmd}" "${index};

echo $fullCmd;
$fullCmd;
