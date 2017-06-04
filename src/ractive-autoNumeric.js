Ractive.decorators.autoNumeric = function (node, relativeKeypath, boundValue) {
    var self = this,
        $el = $(node),
        context = self.getContext(node),
        updateModel = function () {
            context.set(relativeKeypath, $el.autoNumeric('getNumber'));
        };

    if (typeof relativeKeypath !== 'string') {
        throw new Error('The binding name is required.');
    }

    if (arguments.length !== 3) {
        throw new Error('Invalid number of arguments specified. Correct usage: as-autoNumeric="\'relativeKeypath\', relativeKeypath"');
    }

    if (context.isBound()) {
        throw new Error('You cannot use two-way binding for the "autoNumeric" decorator.');
    }

    $el.autoNumeric('init')
       .autoNumeric('set', boundValue)
       .on('input', updateModel);

    return {
        update: function (newRelativeKeypath, newValue) {
            if (newRelativeKeypath !== relativeKeypath) {
                relativeKeypath = newRelativeKeypath;
            }

            if ($el.autoNumeric('getNumber') !== newValue) {
                $el.autoNumeric('set', newValue);
            }
        },

        teardown: function () {
            $el.off('input', updateModel)
               .autoNumeric('destroy');
        }
    };
};
