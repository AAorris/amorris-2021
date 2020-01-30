#!/usr/bin/env python3
items = [json.loads(l) for l in lines]                         
open('tags.tbtl', 'w') \
    .write('\n'.join(
    [f'{tag:<12}{name}' for tag, name in
     list(chain.from_iterable([
      list(zip(item[1].split(), cycle([
       item[0]]))) for item in items]))]))
