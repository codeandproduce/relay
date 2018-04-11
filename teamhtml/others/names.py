file = open("teams",'r')
teams = file.readlines()
file.close()
for i in range(len(teams)):
	teams[i] = teams[i].strip()

for t in teams:
	f = open(t,'r')
	names = f.readlines()
	f.close()
	for i in range(len(names)):
		names[i] = names[i].strip().split("\t")
	f = open(t+"html",'w')
	print(t)
	for n in names:
		f.write('<tr>\n')
		f.write('\t<td>'+n[0]+'</td>\n')
		f.write('\t<td>'+n[1]+'</td>\n')
		try:
			f.write('\t<td>'+n[2]+'</td>\n')
		except IndexError:
			f.write('\t<td> </td>\n')
		f.write('</tr>\n')
		f.write('\n')
	f.close()
